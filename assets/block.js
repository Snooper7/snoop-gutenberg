/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function (wp) {\n  var registerBlockType = wp.blocks.registerBlockType;\n  var RichText = wp.editor.RichText;\n  var quoteIcon = /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    className: \"w-6 h-6\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5\"\n  }));\n  registerBlockType('snoop/block', {\n    title: 'Блок Цитата с фотографией',\n    icon: quoteIcon,\n    category: 'common',\n    keywords: ['qoute', 'snoop', 'цитата'],\n    attributes: {\n      quoteText: {\n        type: 'array',\n        source: 'children',\n        selector: '.snoop-quote'\n      },\n      quoteTitle: {\n        type: 'array',\n        source: 'children',\n        selector: 'h5'\n      }\n    },\n    edit: function edit(props) {\n      var _props$attributes = props.attributes,\n        quoteText = _props$attributes.quoteText,\n        quoteTitle = _props$attributes.quoteTitle,\n        className = props.className,\n        isSelected = props.isSelected,\n        setAttributes = props.setAttributes;\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: className\n      }, /*#__PURE__*/React.createElement(RichText, {\n        tagName: \"h5\",\n        onChange: function onChange(newValue) {\n          return setAttributes({\n            quoteTitle: newValue\n          });\n        },\n        value: quoteTitle,\n        formattingControls: ['bold']\n      }), /*#__PURE__*/React.createElement(RichText, {\n        tagName: \"div\",\n        multiline: \"p\",\n        onChange: function onChange(newValue) {\n          return setAttributes({\n            quoteText: newValue\n          });\n        },\n        value: quoteText\n      }), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-footer dfrc\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-img\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: \"http://wpplug.loc/app/uploads/2024/03/6.png\",\n        alt: \"\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-info dfcs\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-name\"\n      }, \"\\u0418\\u043C\\u044F \\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F\"), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-title\"\n      }, \"\\u0410\\u0440\\u0445\\u0438\\u0442\\u0435\\u043A\\u0442\\u043E\\u0440\"))));\n    },\n    save: function save(props) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-quote-block dfcs\"\n      }, /*#__PURE__*/React.createElement(\"h5\", {\n        className: \"snoop-quote-block-title\"\n      }, props.attributes.quoteTitle), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-quote color-ondark\"\n      }, props.attributes.quoteText), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-footer dfrc\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-img\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: \"http://wpplug.loc/app/uploads/2024/03/6.png\",\n        alt: \"\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-info dfcs\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-name\"\n      }, \"\\u0418\\u043C\\u044F \\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F\"), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"snoop-qoute-block-title\"\n      }, \"\\u0410\\u0440\\u0445\\u0438\\u0442\\u0435\\u043A\\u0442\\u043E\\u0440\"))));\n    }\n  });\n})(window.wp);\n\n//# sourceURL=webpack://snoop-gutenberg/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;