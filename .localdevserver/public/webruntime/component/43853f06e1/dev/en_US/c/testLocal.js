Webruntime.moduleRegistry.define('c/testLocal', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("h1", {
        key: 2
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 3
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 4
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 5
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 6
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 7
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 8
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 9
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 10
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 11
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 12
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 13
      }, [api_text("Dima Hello!!!")]), api_element("h1", {
        key: 14
      }, [api_text("Dima Hello!!!")]), api_element("div", {
        classMap: {},
        styleMap: {
          "color": "red"
        },
        key: 15
      }, [api_text("ANDREY V SHOKE!!!!")]), api_element("div", {
        classMap: {},
        styleMap: {
          "color": "red"
        },
        key: 16
      }, [api_text("ANDREY V SHOKE!!!!")]), api_element("div", {
        classMap: {},
        styleMap: {
          "color": "red"
        },
        key: 17
      }, [api_text("ANDREY V SHOKE!!!!")]), api_element("div", {
        classMap: {},
        styleMap: {
          "color": "red"
        },
        key: 18
      }, [api_text("ANDREY V SHOKE!!!!")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-testLocal_testLocal-host",
      shadowAttribute: "lwc-testLocal_testLocal"
    };

    class TestLocal extends lwc.LightningElement {}

    var testLocal = lwc.registerComponent(TestLocal, {
      tmpl: _tmpl
    });

    return testLocal;

});
