"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var reactNativeClasses = function reactNativeClasses(styleSheet) {
  var classesHOCFn = function classesHOCFn(styleSheet) {
    return function (Component) {
      return function (_ref) {
        var _ref$className = _ref.className,
            className = _ref$className === void 0 ? "" : _ref$className,
            _ref$style = _ref.style,
            style = _ref$style === void 0 ? {} : _ref$style,
            props = _objectWithoutProperties(_ref, ["className", "style"]);

        var rawStyles = className.split(" ").reduce(function (acc, curr) {
          return _objectSpread(_objectSpread({}, acc), styleSheet[curr]);
        }, {});

        var styles = _reactNative.StyleSheet.create({
          root: _objectSpread(_objectSpread({}, rawStyles), style)
        });

        return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
          style: styles.root
        }));
      };
    };
  };

  var classesHOC = classesHOCFn(styleSheet);
  var FlatList = classesHOC(_reactNative.FlatList);
  var Text = classesHOC(_reactNative.Text);
  var View = classesHOC(_reactNative.View);
  var TouchableOpacity = classesHOC(_reactNative.TouchableOpacity);
  var ScrollView = classesHOC(_reactNative.ScrollView);
  var Button = classesHOC(_reactNative.Button);
  var Image = classesHOC(_reactNative.Image);
  var ImageBackground = classesHOC(_reactNative.ImageBackground);
  var TextInput = classesHOC(_reactNative.TextInput);
  var ActivityIndicator = classesHOC(_reactNative.ActivityIndicator);
  var Modal = classesHOC(_reactNative.Modal);
  var SectionList = classesHOC(_reactNative.SectionList);
  var StatusBar = classesHOC(_reactNative.StatusBar);
  var TouchableHighlight = classesHOC(_reactNative.TouchableHighlight);
  var TouchableWithoutFeedback = classesHOC(_reactNative.TouchableWithoutFeedback);
  var VirtualizedList = classesHOC(_reactNative.VirtualizedList);
  return {
    classesHOC: classesHOC,
    FlatList: FlatList,
    Text: Text,
    View: View,
    TouchableOpacity: TouchableOpacity,
    ScrollView: ScrollView,
    Button: Button,
    Image: Image,
    ImageBackground: ImageBackground,
    TextInput: TextInput,
    ActivityIndicator: ActivityIndicator,
    Modal: Modal,
    SectionList: SectionList,
    StatusBar: StatusBar,
    TouchableHighlight: TouchableHighlight,
    TouchableWithoutFeedback: TouchableWithoutFeedback,
    VirtualizedList: VirtualizedList
  };
};

var _default = reactNativeClasses;
exports["default"] = _default;
