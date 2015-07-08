$("#submit").on("click",function(event){
    window.scroll(0,0);
    judge();
    $.post("/sum_score",$("form").serialize(), function(score) {
      $("#sub_score").prop("value" , score);
    })
});

var addAloneSelectListener = function(name){
    _.forEach(document.getElementsByName(name), function(val) {
        val.addEventListener("click", function() {
            // console.log(name);
            document.getElementById(name).innerHTML = val.value;
        });
    });
}


var addListenerSelects = function(name) {
    _.forEach(document.getElementsByName(name), function(element) {
        element.addEventListener("click", function() {
            var inner = document.getElementById(name).innerHTML;
            var index = inner.indexOf(element.value);
            var result = ""
            if(index === -1){
                result = inner + element.value;
            }else {
                _.forEach(inner, function(n, i) {
                    if(i !== index) {
                        result += n;
                    }
                });
            }
            document.getElementById(name).innerHTML = result;
        });
    });
}

var listener = function() {
    addAloneSelectListener("one_select_1");
    addAloneSelectListener("one_select");
    addListenerSelects("check_box1");
    addListenerSelects("check_box2");
}
listener();

var judge = function(){
  if(document.getElementById("banji").value == "") {
    alert("请输入班级");
    evt.preventDefault();
}else if(document.getElementById("xingming").value == "") {
    alert("请输入姓名");
    evt.preventDefault();
}else if(document.getElementById("xuehao").value == "") {
    alert("请输入学号");
    evt.preventDefault();
  }
}
