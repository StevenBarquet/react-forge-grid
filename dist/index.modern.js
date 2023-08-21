import React, { useState, useEffect } from 'react';

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
  var debugStyles = "\n    ." + parentClassName + " {\n      background: #212121;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+1) {\n      background: #0081e3;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+2) {\n      background: #18b6f6;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+3) {\n      background: #7b0fab;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+4) {\n      background: #e600d3;  /* A\xF1ade nuevos colores aqu\xED */\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+5) {\n      background: #ffa500;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+6) {\n      background: #006080;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+7) {\n      background: #fab7fa;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+8) {\n      background: #ff4500;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+9) {\n      background: #9acd32;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+10) {\n      background: #bb6af6;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+11) {\n      background: #c3c6be;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+12) {\n      background: #2be2d3;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+13) {\n      background: #7fff00;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+14) {\n      background: #ffb32f;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+15) {\n      background: #ffd700;\n    }\n";
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
  var y = in50Range(vSpace);
  var x = in50Range(hSpace);
  classNames.push("row-space-y-" + y);
  classNames.push("row-space-x-" + x);
  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }
  return classNames.join(' ');
}
function in50Range(number) {
  if (number && number >= 0 && number <= 50) {
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

var setDebugStyles$1 = function setDebugStyles() {
  var unique = uniqueId();
  var parentClassName = "row-" + unique;
  var debugStyles = "\n    ." + parentClassName + " {\n      background: #212121;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+1) {\n      background: #0081e3;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+2) {\n      background: #18b6f6;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+3) {\n      background: #7b0fab;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+4) {\n      background: #e600d3;  /* A\xF1ade nuevos colores aqu\xED */\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+5) {\n      background: #ffa500;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+6) {\n      background: #006080;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+7) {\n      background: #fab7fa;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+8) {\n      background: #ff4500;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+9) {\n      background: #9acd32;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+10) {\n      background: #bb6af6;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+11) {\n      background: #c3c6be;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+12) {\n      background: #2be2d3;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+13) {\n      background: #7fff00;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+14) {\n      background: #ffb32f;\n    }\n    ." + parentClassName + " .forge-col-element:nth-child(15n+15) {\n      background: #ffd700;\n    }\n";
  return {
    styles: debugStyles,
    parentClassName: parentClassName
  };
};
function getRowClassNames$1(props) {
  var hSpace = props.hSpace,
    vSpace = props.vSpace,
    debugClassName = props.debugClassName;
  var classNames = ['forge-row-element'];
  var y = in50Range$1(vSpace);
  var x = in50Range$1(hSpace);
  classNames.push("row-space-y-" + y);
  classNames.push("row-space-x-" + x);
  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }
  return classNames.join(' ');
}
function in50Range$1(number) {
  if (number && number >= 0 && number <= 50) {
    return number;
  }
  return 0;
}

var isBrowser = typeof window !== 'undefined';
function NextFrow(props) {
  var children = props.children,
    hSpace = props.hSpace,
    vSpace = props.vSpace,
    debug = props.debug,
    className = props.className,
    styledProp = props.style;
  var _useState = useState(undefined),
    debugStyles = _useState[0],
    setDebug = _useState[1];
  useEffect(function () {
    if (isBrowser && debug) {
      setDebug(setDebugStyles$1());
    }
  }, [isBrowser, debug]);
  var classNames = getRowClassNames$1({
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

function Wrapper(props) {
  var isNextjs = typeof window === 'undefined' && props.debug;
  if (isNextjs) return React.createElement(NextFrow, Object.assign({}, props));
  return React.createElement(Frow, Object.assign({}, props));
}

function getColClassNames$1(gridInfo) {
  var responsiveCols = colWidthBalancer$1(gridInfo);
  var classNames = ['forge-mcol-element', 'mcol'];
  if (responsiveCols.span) {
    classNames.push("mcol-span-" + responsiveCols.span);
  }
  if (responsiveCols.xs) {
    classNames.push("mcol-xs-span-" + responsiveCols.xs);
  }
  if (responsiveCols.sm) {
    classNames.push("mcol-sm-span-" + responsiveCols.sm);
  }
  if (responsiveCols.md) {
    classNames.push("mcol-md-span-" + responsiveCols.md);
  }
  if (responsiveCols.lg) {
    classNames.push("mcol-lg-span-" + responsiveCols.lg);
  }
  if (responsiveCols.xl) {
    classNames.push("mcol-xl-span-" + responsiveCols.xl);
  }
  if (responsiveCols.xxl) {
    classNames.push("mcol-xxl-span-" + responsiveCols.xxl);
  }
  return classNames.join(' ');
}
function colWidthBalancer$1(gridInfo) {
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

var _excluded$1 = ["children", "className", "style"];
function Mcol(props) {
  var children = props.children,
    className = props.className,
    style = props.style,
    grid = _objectWithoutPropertiesLoose(props, _excluded$1);
  var classNames = getColClassNames$1(_extends({}, grid));
  var fullClassNames = className ? classNames + " " + className : classNames;
  return React.createElement("div", {
    className: fullClassNames,
    style: style
  }, children);
}

var setDebugStyles$2 = function setDebugStyles() {
  var unique = uniqueId();
  var parentClassName = "row-" + unique;
  var debugStyles = "\n    ." + parentClassName + " {\n      background: #212121;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+1) {\n      background: #0081e3;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+2) {\n      background: #18b6f6;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+3) {\n      background: #7b0fab;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+4) {\n      background: #e600d3;  /* A\xF1ade nuevos colores aqu\xED */\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+5) {\n      background: #ffa500;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+6) {\n      background: #006080;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+7) {\n      background: #fab7fa;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+8) {\n      background: #ff4500;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+9) {\n      background: #9acd32;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+10) {\n      background: #bb6af6;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+11) {\n      background: #c3c6be;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+12) {\n      background: #2be2d3;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+13) {\n      background: #7fff00;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+14) {\n      background: #ffb32f;\n    }\n    ." + parentClassName + " .forge-mcol-element:nth-child(15n+15) {\n      background: #ffd700;\n    }\n";
  return {
    styles: debugStyles,
    parentClassName: parentClassName
  };
};
function getRowClassNames$2(props) {
  var space = props.space,
    debugClassName = props.debugClassName;
  var classNames = ['forge-row-wrapper forge-row-element'];
  var x = in50Range$2(space);
  classNames.push("row-space-" + x);
  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }
  return classNames.join(' ');
}
function in50Range$2(number) {
  if (number && number >= 0 && number <= 50) {
    return number;
  }
  return 0;
}

function Mrow(props) {
  var space = props.space,
    debug = props.debug,
    className = props.className,
    style = props.style,
    children = props.children;
  var debugStyles = debug && setDebugStyles$2();
  var classNames = getRowClassNames$2({
    space: space,
    debugClassName: debugStyles
  });
  var fullClassNames = className ? classNames + " " + className : classNames;
  return React.createElement(React.Fragment, null, debugStyles ? React.createElement("style", null, debugStyles.styles) : null, React.createElement("div", {
    className: fullClassNames,
    style: style
  }, children));
}

function NextMrow(props) {
  var space = props.space,
    debug = props.debug,
    className = props.className,
    style = props.style,
    children = props.children;
  var _useState = useState(undefined),
    debugStyles = _useState[0],
    setDebug = _useState[1];
  useEffect(function () {
    if (isBrowser && debug) {
      setDebug(setDebugStyles$2());
    }
  }, [isBrowser, debug]);
  var classNames = getRowClassNames$2({
    space: space,
    debugClassName: debugStyles
  });
  var fullClassNames = className ? classNames + " " + className : classNames;
  return React.createElement(React.Fragment, null, debugStyles ? React.createElement("style", null, debugStyles.styles) : null, React.createElement("div", {
    className: fullClassNames,
    style: style
  }, children));
}

function Wrapper$1(props) {
  var isNextjs = typeof window === 'undefined' && props.debug;
  if (isNextjs) return React.createElement(NextMrow, Object.assign({}, props));
  return React.createElement(Mrow, Object.assign({}, props));
}

export { Fcol, Wrapper as Frow, Mcol, Wrapper$1 as Mrow };
//# sourceMappingURL=index.modern.js.map
