# ConfirmDialog Component Contract

- it has Props of:
  isOpen: boolean - If `true`, the Dialog is open
  title: string - Title of dialog
  leftButtonText: string - Left buttont text
  rightButtonText: string - Right button text
  text?: string - Text body content 
  body?: ReactElement - Body content
  variant?: 'default' | 'danger' - Variant of dialog
  icon?: string - Icon on header
  onLeftButtonClick?: () => void - Left button click event
  onRightButtonClick?: () => void - Right button click event

- it has no state

- it renders a `<div>` element