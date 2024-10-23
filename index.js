function addNewWEField() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb === null || weOb === void 0 ? void 0 : weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb === null || aqOb === void 0 ? void 0 : aqOb.insertBefore(newNode, aqAddButtonOb);
}
// skill
function skillsdNewField() {
    var newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');
    var skillOb = document.getElementById("skill");
    var skillAddButtonOb = document.getElementById("skillAddButton");
    skillOb === null || skillOb === void 0 ? void 0 : skillOb.insertBefore(newNode, skillAddButtonOb);
}
// GENRATING CV
function generateCV() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    // console.log("genrating CV");
    var nameField = document.getElementById("nameField").value;
    var nameT1 = document.getElementById('nameT');
    nameT1 === null || nameT1 === void 0 ? void 0 : nameT1.innerHTML = nameField;
    // direct
    (_a = document.getElementById('nameT2')) === null || _a === void 0 ? void 0 : _a.innerHTML = nameField;
    // contact
    (_b = document.getElementById('contactT')) === null || _b === void 0 ? void 0 : _b.innerHTML = document.getElementById("contactField").value;
    // address
    (_c = document.getElementById('addressT')) === null || _c === void 0 ? void 0 : _c.innerHTML = document.getElementById("addressField").value;
    // address
    (_d = document.getElementById('fbT')) === null || _d === void 0 ? void 0 : _d.innerHTML = document.getElementById("fbField").value;
    // address
    (_e = document.getElementById('instaT')) === null || _e === void 0 ? void 0 : _e.innerHTML = document.getElementById("instaField").value;
    // address
    (_f = document.getElementById('linkeT')) === null || _f === void 0 ? void 0 : _f.innerHTML = document.getElementById("linkeField").value;
    // objecttive
    (_g = document.getElementById('objectiveT')) === null || _g === void 0 ? void 0 : _g.innerHTML = document.getElementById('objectiveFied').value;
    // work exp
    var wes = document.getElementsByClassName('weField');
    var str = "";
    for (var _i = 0, wes_1 = wes; _i < wes_1.length; _i++) {
        var e = wes_1[_i];
        str = str + "<li> ".concat(e.value, " </li>");
    }
    (_h = document.getElementById('weT')) === null || _h === void 0 ? void 0 : _h.innerHTML = str;
    // aq 
    var aqs = document.getElementsByClassName('aqField');
    var str1 = "";
    for (var _o = 0, aqs_1 = aqs; _o < aqs_1.length; _o++) {
        var e = aqs_1[_o];
        str1 += "<li> ".concat(e.value, " </li>");
    }
    (_j = document.getElementById('aqT')) === null || _j === void 0 ? void 0 : _j.innerHTML = str1;
    // skills
    var skill = document.getElementsByClassName('skillField');
    var str2 = "";
    for (var _p = 0, skill_1 = skill; _p < skill_1.length; _p++) {
        var e = skill_1[_p];
        str2 += "<li> ".concat(e.value, " </li>");
    }
    (_k = document.getElementById('skillT')) === null || _k === void 0 ? void 0 : _k.innerHTML = str2;
    // image
    var file = document.getElementById('imgField').files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // set image
    // 
    reader.onloadend = function () {
        document.getElementById('imgT').src = reader.result;
    };
    (_l = document.getElementById('cv-form')) === null || _l === void 0 ? void 0 : _l.style.display = "none";
    (_m = document.getElementById('cvtemplate')) === null || _m === void 0 ? void 0 : _m.style.display = "block";
}
// print CV
function printCV() {
    window.print();
}
