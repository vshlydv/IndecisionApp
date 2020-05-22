"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handleAction = _this.handleAction.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: [],
            error: undefined
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) this.setState(function (preState) {
                    return {
                        options: options
                    };
                });
            } catch (e) {
                //Do nothing
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.state.options.length != prevState.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "handleDeleteAll",
        value: function handleDeleteAll() {
            this.setState(function () {
                return { options: [], error: undefined };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    }), error: undefined };
            });
        }
    }, {
        key: "handleAction",
        value: function handleAction() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        }
    }, {
        key: "handleAddOptions",
        value: function handleAddOptions(option) {
            var error = undefined;
            if (!option) {
                error = "Cann't add an empty option.";
            } else {
                if (this.state.options.indexOf(option) > -1) {
                    error = "Entered option already exists.";
                }
            }
            this.setState(function (prevState) {
                if (error) {
                    return {
                        error: error
                    };
                }
                return {
                    options: prevState.options.concat(option),
                    error: undefined
                };
            });
            return error;
        }
    }, {
        key: "render",
        value: function render() {
            var subtitle = "Put your life in the hands of the computer.";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handleAction: this.handleAction
                }),
                React.createElement(
                    "p",
                    null,
                    this.state.error != undefined && this.state.error
                ),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteAll: this.handleDeleteAll,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOptions: this.handleAddOptions })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: !props.hasOptions,
                onClick: props.handleAction
            },
            "What should I do?"
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText,
        React.createElement(
            "button",
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            "remove"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteAll },
            "Remove All"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Please Add optoins!!!"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                handleDeleteOption: props.handleDeleteOption,
                key: option,
                optionText: option
            });
        })
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleOnSubmit",
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var text = e.target.elements.text.value.trim();
            var error = this.props.handleAddOptions(text);
            if (error === undefined) e.target.elements.text.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleOnSubmit },
                    React.createElement("input", { type: "text", name: "text" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
