
    //自定义一个验证手机号码为1开头、11位的数字的验证方式。
    jQuery.validator.addMethod("ismobile",function(value,element){
        var mobilePhone= /^1[0-9]{10}$/;
        return this.optional(element) || (mobilePhone.test(value));
    },"请输入正确的手机号码");

    //利用validat.js验证表单
    var $form=$("#userForm");
     $form.validate({
         //将错误信息放到星号的后面
        errorPlacement:function(error,element) {  
        error.appendTo(element.next());
         },

       /*   //调试模式不提交
        debug:true, */

        //规则
        rules: {
            userName: {
                 required: true,
                 minlength:3,
                 maxlength:15,
            },
            age: {
                 required: true,
                 min:3,
                 max:15,
            },
            password:{
                required:true,
                minlength:6,
                maxlength:10,
            },
            conformPassword:{
                required:true,
                ranglength:[6,10],
                equalTo:"#password",
            },
            address:{
                required:true,
            },
            mobile:{
                required:true,
                /* mobile:true, */
                ismobile:true,
            },
            email:{
                required:true,
                email:true,
            },
        },
        messages:{
            userName: {
                required: "用户名不能为空!",
                minlength: "用户名至少三位!",
                maxlength: "用户名不能超过15位",
            },
            age: {
                 required: "年龄不能为空",
                 min:"年龄不能小于3",
                 max:"年龄不能大于15",
            },
            password: {
                required: "密码不能为空!",
                minlength: "密码至少六位!",
            },
            confirm_password: {
                required: "密码确认不能为空!",
                equalTo: "两次输入密码不一致 !",
            },
            address: {
                required: "请选择出生地!",
            },
            mobile: {
                required: "手机不能为空!",
                /* mobile: "手机格式不正确", */
                ismobile:"请输入正确的手机号码",
            },
            email: {
                required: "邮箱不能为空!",
                email: "邮箱格式不正确",
            },
            },
            submitHandler:function(form){
                 alert("提交事件!");   
                 form.submit();
                 }
     })
