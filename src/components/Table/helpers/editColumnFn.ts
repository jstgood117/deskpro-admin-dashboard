export const setTdsWidth = (colIndex: number, width: number) => {
  const colTds = document.getElementsByClassName(`td-${colIndex}`);

  for (const tdEl of colTds) {
    (tdEl as HTMLElement).style.minWidth = width + 'px';
  }
};

export const resetColWidth = (el: any) => {
  const curColIndex = el.getAttribute('data-colindex');
  el.style.minWidth = '1px';
  setTdsWidth(curColIndex, 1);
};

export const resizableTable = () => {
  const divs = document.getElementsByClassName('resizer');
  if (!divs.length) return;

  for (const div of divs) {
    setListeners(div);
  }
};

export const getLargestPadding = (colTds: HTMLCollectionOf<Element>) => {
  let largestPadding = 0;
  for (const tdEl of colTds) {
    const currentStyle: any = getElementStyle(tdEl as HTMLElement);
    if (
      currentStyle &&
      currentStyle.hasOwnProperty('padding-left') &&
      currentStyle.hasOwnProperty('padding-right')
    ) {
      largestPadding = Math.max(
        parseInt(currentStyle['padding-left'], 10) +
          parseInt(currentStyle['padding-right'], 10),
        largestPadding
      );
    }
  }

  return largestPadding;
};

const getElementStyle = (el: HTMLElement) => {
  return window ? window.getComputedStyle(el) : {};
};

const setListeners = (div: any) => {
  let pageX: number;
  let curCol: any;
  let nxtCol: any;
  let curColWidth: number;
  let nxtColWidth: number;
  let curColIndex: number;
  let largestPadding: any;

  div.addEventListener('mousedown', (e: any) => {
    e.stopImmediatePropagation();
    curCol = e.target.parentElement;
    nxtCol = curCol.nextElementSibling;
    curColIndex = curCol.getAttribute('data-colindex');
    pageX = e.pageX;
    curColWidth = curCol.offsetWidth;
    if (nxtCol) nxtColWidth = nxtCol.offsetWidth;

    const colTds = document.getElementsByClassName(`td-${curColIndex}`);
    largestPadding = getLargestPadding(colTds);
  });

  div.addEventListener('dblclick', (e: any) => {
    curCol = e.target.parentElement;
    resetColWidth(curCol);
  });

  document.addEventListener('mousemove', (e: any) => {
    if (curCol) {
      const diffX = e.pageX - pageX;

      if (nxtCol)
        nxtCol.style.minWidth = nxtColWidth - diffX + largestPadding + 'px';

      curCol.style.minWidth = curColWidth + diffX - largestPadding + 'px';

      setTdsWidth(curColIndex, curColWidth + diffX - largestPadding);
    }
  });

  document.addEventListener('mouseup', (e: any) => {
    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
    largestPadding = undefined;
  });
};
