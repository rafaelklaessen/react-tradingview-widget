# Version 1.3.1
Released 2019-07-26

- Prevent undesirable full-screen chart when the component is unmounted before the chart is rendered. Thanks [AurelReb](https://github.com/AurelReb)!

# Version 1.3.0
Released 2018-09-10

- Added prop-types for newly added props
- Added `RangeTypes` constants
- Reordered props

# Version 1.2.5
Released 2018-04-16

- Fixed constants not being exported

# Version 1.2.4
Released 2018-04-13

- Fixed Server-Side Rendering not working

# Version 1.2.3
Released 2018-03-21

- Fixed a bug that caused the component to break when multiple instances were created

# Version 1.2.2
Released 2018-01-21

- Switched from `Component` to `PureComponent` so that the widget doesn't rerender when the props didn't change

# Version 1.2.1
Released 2018-01-21

- Fixed component not rerendering when props changed
- The widget container now has a width and height of `100%` when the autosize prop is true
- Changed script element and container element IDs

# Version 1.2.0
Released 2018-01-21

- Added description to `package.json`
- Refactored some little things
- Removed unnecessary jest config
- Removed unused dependencies
- Made tests work again by adding `react` and `react-dom` as devDependencies
- Updated outdated dependencies
- Added `babel-core` devDependency to remove warnings

# Version 1.1.2
Released 2018-01-20

- Fixed indenting mistake

# Version 1.1.1
Released 2018-01-20

- Added LICENSE file
- Fixed typo in README
- The widget now renders inside an `article` element instead of a `div` element

# Version 1.1.0
Released 2018-01-20

- Added constants
- Added missing prop-types
- Updated README
- Added changelog
- Updated tests
- Fixed webpack config indenting

# Version 1.0.1
Released 2018-01-20

- Added `autosize` prop
- Updated README

# Version 1.0.0
Released 2018-01-20

- Initial release
