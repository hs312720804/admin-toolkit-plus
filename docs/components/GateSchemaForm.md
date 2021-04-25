# GateSchema 表单  
`c-gate-schema-form`  

使用一个特定的数据结构(gateschema)来创建一个表单

## 示例  

### 效果

<Demo>
  <GateSchemaFormDemo />
</Demo>

### 代码  
```vue
<template>
   <div style="padding-bottom:50px;">
    <c-gate-schema-form
      :schema="schema"
      v-model="formData"
    >
    </c-gate-schema-form>
   </div>
</template>

<script>
import _ from 'gateschema'
const schema = _
  .map({
    name: _
      .map({
        firstName: _.required
          .$msg("First Name is required")
          .string.notEmpty.other("form", {
            layout: "inline",
            cols: {
              item: 6,
              label: 0,
              wrapper: 24
            },
            placeholder: "First Name"
          }),
        lastName: _.required.string.notEmpty.other("form", {
          layout: "inline",
          cols: {
            item: {
              span: 8,
              offset: 1
            },
            label: 0,
            wrapper: 24
          },
          placeholder: "Last Name"
        })
      })
      .other("form", {
        class: {
          "user-name": true
        }
      })
  })
  .map({
    email: _
      .switch("/phone", [
        {
          case: _.required,
          schema: _.optional
        },
        {
          case: _.any,
          schema: _.required.$msg("email or phone is required")
        }
      ])
      .string.notEmpty.format("email"),
    phone: _.switch("/email", [
      {
        case: _.required,
        schema: _.optional
      },
      {
        case: _.any,
        schema: _.required.$msg("email or phone is required")
      }
    ]).string.notEmpty,
    captcha: _.string.switch("/phone", [
      {
        case: _.required,
        schema: _.required
      },
      {
        case: _.any,
        schema: _.optional.other("form", {
          hidden: true
        })
      }
    ]),
    password: _.required.string.notEmpty.other("form", {
      type: "password"
    }),
    gender: _.enum({
      male: 0,
      female: 1
    }),
    selectGender: _
      .enum({
        male: 0,
        female: 1
      })
      .other("form", {
        component: "Select",
        placeholder: "Please Select"
      }),
    languages: _
      .enumList({
        c: 1,
        java: 4,
        scala: 5,
        haskell: 7,
        javascript: 8
      })
      .other("form", {
        placeholder: "Please Select",
        disabledItems: {
          javascript: true
        }
      }),
    selectLanguages: _
      .enumList({
        c: 1,
        go: 2,
        "c++": 3,
        java: 4,
        scala: 5,
        python: 6,
        haskell: 7,
        javascript: 8
      })
      .other("form", {
        component: "Select",
        placeholder: "Please Select",
        disabledItems: {
          java: true
        }
      }),
    rememberMe: _.required.boolean,
    date: _.required.string.other("form", {
      component: "DatePicker"
    }),
    dateTime: _.optional.string.other("form", {
      component: "DateTimePicker"
    }),
    timestamp: _.required.number.other("form", {
      component: "DateTimePicker",
      valueType: "millisecond"
    }),
    address: _.list(
      _.required.string.other("form", {
        cols: {
          label: 0,
          wrapper: 24
        }
      })
    ),
    passenger: _.required.list(
      _.map({
        name: _.required.string,
        age: _.optional.number
      })
    )
  })
  .other("form", {
    cols: {
      label: 6,
      wrapper: 18
    },
    footer: {
      cols: {
        label: 0,
        wrapper: 24
      },
      showSubmit: true,
      submitText: "Submit Text"
    },
    layout: "vertical"
  });

export default {
  data() {
    return {
      schema,
      formData: {}
    }
  }
}

</script>

```


## Play Ground  
<GateSchemaFormPlayGround />

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| schema | Object | 表单的 gateschema | |
| v-model  | Object | 与表单绑定的数据对象 |  |


## 参考  
GateSchema  
[https://github.com/gateschema/gateschema-js  ](https://github.com/gateschema/gateschema-js)

StateForm  
[https://github.com/stateform/StateForm-Specification/blob/master/StateForm_zh.md](https://github.com/stateform/StateForm-Specification/blob/master/StateForm_zh.md) 


<Comment />