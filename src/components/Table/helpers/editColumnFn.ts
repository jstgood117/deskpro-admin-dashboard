export const setTdsWidth = (colIndex: number, width: number) => {
  const colTds = document.getElementsByClassName(`td-${colIndex}`);

  for (const tdEl of colTds) {
    (tdEl as HTMLElement).style.minWidth = width + 'px';
  }
};

export const resetColWidth = (el: HTMLElement) => {
  const curColIndex: string = el.getAttribute('data-colindex');
  el.style.minWidth = '1px';
  setTdsWidth(parseInt(curColIndex, 10), 1);
};

export const resizableTable = () => {
  const divs = document.getElementsByClassName('resizer');
  if (!divs.length) return;

  for (const div of divs) {
    setListeners(div as HTMLElement);
  }
};

export const getLargestPadding = (colTds: HTMLCollectionOf<Element>) => {
  let largestPadding = 0;
  for (const tdEl of colTds) {
    const currentStyle: CSSStyleDeclaration = getElementStyle(tdEl as HTMLElement);
    if (
      currentStyle &&
      currentStyle.hasOwnProperty('padding-left') &&
      currentStyle.hasOwnProperty('padding-right')
    ) {
      largestPadding = Math.max(
        parseInt(currentStyle['padding-left' as any], 10) +
          parseInt(currentStyle['padding-right' as any], 10),
        largestPadding
      );
    }
  }

  return largestPadding;
};

const getElementStyle = (el: HTMLElement): CSSStyleDeclaration => {
  return window ? window.getComputedStyle(el) : {} as CSSStyleDeclaration;
};

const setListeners = (div: HTMLElement) => {
  let pageX: number;
  let curCol: HTMLElement;
  let curColWidth: number;
  let curColIndex: number;
  let largestPadding: number;

  div.addEventListener('mousedown', (e: MouseEvent) => {
    e.stopImmediatePropagation();
    curCol = (e.target as HTMLDivElement).parentElement;
    curColIndex = parseInt(curCol.getAttribute('data-colindex'), 10);
    pageX = e.pageX;
    curColWidth = curCol.offsetWidth;

    const colTds = document.getElementsByClassName(`td-${curColIndex}`);
    largestPadding = getLargestPadding(colTds);
  });

  div.addEventListener('dblclick', (e: MouseEvent) => {
    curCol = (e.target as HTMLElement).parentElement;
    resetColWidth(curCol);
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (curCol) {
      const diffX = e.pageX - pageX;

      curCol.style.minWidth = curColWidth + diffX - largestPadding + 'px';

      setTdsWidth(curColIndex, curColWidth + diffX - largestPadding);
    }
  });

  document.addEventListener('mouseup', (e: MouseEvent) => {
    curCol = undefined;
    pageX = undefined;
    curColWidth = undefined;
    largestPadding = undefined;
  });
};
