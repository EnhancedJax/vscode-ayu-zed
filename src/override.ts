import { Override } from 'template'

const border = '#54565D'
const foreground = '#9A9A98'
const foregroundBright = '#CCCAC2'
const background = '#353944'
const editorBackground = '#242835'
const titleBar = '#464A52'

export const override: Override = {
  colors: {
    // EDITOR CONTROL
    'editor.background': editorBackground,
    'editor.lineHighlightBackground': '#313540',

    // SIDEBAR CONTROL
    'sideBar.background': background,
    'sideBar.foreground': foreground,
    'sideBar.border': border,
    'sideBarSectionHeader.background': border,
    'sideBarSectionHeader.foreground': foreground,
    'sideBarSectionHeader.border': border,
    'gitDecoration.ignoredResourceForeground': '#7B7D7F',

    // STATUS BAR CONTROL
    'statusBar.background': titleBar,
    'statusBar.foreground': foregroundBright,
    'statusBar.border': border,

    // TAB CONTROL
    'editorGroup.border': border,
    'editorGroup.background': background,
    'editorGroupHeader.noTabsBackground': background,
    'editorGroupHeader.tabsBackground': background,
    'editorGroupHeader.tabsBorder': border,
    'tab.border': border,
    'tab.activeBorderTop': '#00000000',
    'tab.inactiveBackground': background,

    // LIST AND TREES
    'list.activeSelectionBackground': border,
    'list.activeSelectionForeground': foreground,
    'list.inactiveSelectionBackground': border,
    'list.inactiveSelectionForeground': foreground,

    // PANEL CONTROL
    'panel.background': background,
    'panel.border': border,
    'panelTitle.inactiveForeground': foreground,

    // WINDOW CONTROL
    'titleBar.activeBackground': titleBar,
    'titleBar.activeForeground': foreground,
    'titleBar.inactiveBackground': titleBar,
    'titleBar.inactiveForeground': foreground,
    'titleBar.border': border,
    'window.activeBorder': border,

    // TERMINAL CONTROL
    'terminal.background': editorBackground,

    // QUICK INPUT CONTROL
    'quickInput.background': background,
    'quickInput.foreground': foreground,
    'input.background': background,
    'input.foreground': foreground,
    'inputOption.activeBorder': '#00000000'
  }
}
