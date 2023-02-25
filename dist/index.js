function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function getColClassNames(gridInfo) {
  var responsiveCols = colWidthBalancer(gridInfo);
  var classNames = ['forge-col-element', 'col'];
  if (responsiveCols.span) {
    classNames.push("col-span-" + responsiveCols.span);
  }
  if (responsiveCols.xs) {
    classNames.push("col-xs-span-" + responsiveCols.xs);
  }
  if (responsiveCols.sm) {
    classNames.push("col-sm-span-" + responsiveCols.sm);
  }
  if (responsiveCols.md) {
    classNames.push("col-md-span-" + responsiveCols.md);
  }
  if (responsiveCols.lg) {
    classNames.push("col-lg-span-" + responsiveCols.lg);
  }
  if (responsiveCols.xl) {
    classNames.push("col-xl-span-" + responsiveCols.xl);
  }
  if (responsiveCols.xxl) {
    classNames.push("col-xxl-span-" + responsiveCols.xxl);
  }
  return classNames.join(' ');
}
function colWidthBalancer(gridInfo) {
  var span = gridInfo.span,
    xs = gridInfo.xs,
    sm = gridInfo.sm,
    md = gridInfo.md,
    lg = gridInfo.lg,
    xl = gridInfo.xl,
    xxl = gridInfo.xxl;
  return {
    span: span || xl || 100,
    xs: xs || span || xl || 100,
    sm: sm || span || xl || 100,
    md: md || span || xl || 100,
    lg: lg || span || xl || 100,
    xl: xl || span || xl || 100,
    xxl: xxl || span || xl || 100
  };
}

var _excluded = ["className", "children", "style"];
function Fcol(props) {
  var className = props.className,
    children = props.children,
    style = props.style,
    grid = _objectWithoutPropertiesLoose(props, _excluded);
  var classNames = getColClassNames(_extends({}, grid));
  var fullClassNames = className ? classNames + " " + className : classNames;
  return React.createElement("div", {
    className: fullClassNames,
    style: style
  }, children);
}

function uniqueId() {
  var timestamp = (Date.now() / 1000 | 0).toString(16);
  var id = timestamp + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return id;
}

var setDebugStyles = function setDebugStyles() {
  var unique = uniqueId();
  var parentClassName = "row-" + unique;
  var debugStyles = "\n    ." + parentClassName + "{\n      background: #212121;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(1n){\n      background: #0081e3;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(4n){\n        background: #18b6f6;\n      }\n    ." + parentClassName + " .forge-col-element:nth-child(3n){\n        background: #7b0fab;\n      }\n  ";
  return {
    styles: debugStyles,
    parentClassName: parentClassName
  };
};
function getRowClassNames(props) {
  var hSpace = props.hSpace,
    vSpace = props.vSpace,
    debugClassName = props.debugClassName;
  var classNames = ['forge-row-element'];
  var y = in10Range(vSpace);
  var x = in10Range(hSpace);
  classNames.push("row-space-y-" + y);
  classNames.push("row-space-x-" + x);
  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }
  return classNames.join(' ');
}
function in10Range(number) {
  if (number && number >= 0 && number <= 10) {
    return number;
  }
  return 0;
}

function Frow(props) {
  var children = props.children,
    hSpace = props.hSpace,
    vSpace = props.vSpace,
    debug = props.debug,
    className = props.className,
    styledProp = props.style;
  var debugStyles = debug && setDebugStyles();
  var classNames = getRowClassNames({
    hSpace: hSpace,
    vSpace: vSpace,
    debugClassName: debugStyles
  });
  var style = _extends({
    display: 'block',
    textAlign: (props === null || props === void 0 ? void 0 : props.hAlign) || 'start',
    verticalAlign: (props === null || props === void 0 ? void 0 : props.vAlign) || 'bottom'
  }, styledProp);
  var fullClassNames = className ? classNames + " " + className : classNames;
  return React.createElement(React.Fragment, null, debugStyles ? React.createElement("style", null, debugStyles.styles) : null, React.createElement("div", {
    className: fullClassNames,
    style: style
  }, children));
}

exports.Fcol = Fcol;
exports.Frow = Frow;
//# sourceMappingURL=index.js.map
