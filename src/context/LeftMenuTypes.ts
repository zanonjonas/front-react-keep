export type LeftMenuActionPayloadType = {
  label: string
}

export type LeftMenuActionType = {
  type: 'select'
  payload: LeftMenuActionPayloadType
}

export type LeftMenuListType = {
  label: string
  isSelected: boolean
  icon: JSX.Element
}[]