function login() {
    const user = document.getElementById('username').value;
    const role = document.getElementById('userRole').value;
    const adminPass = "تم اخذ الاذن الرجاء دخولي"; // كلمة السر المطلوبة للمدرسين

    // التأكد من كتابة اسم المستخدم أولاً
    if (user.trim() === "") {
        alert("الرجاء إدخال اسم المستخدم أولاً");
        return;
    }

    if (role === "teacher") {
        // إذا اختار مدرس، يطلب منه كلمة السر الخاصة
        let passCheck = prompt("عفواً، يرجى إدخال كلمة سر المدرسين للمتابعة:");

        if (passCheck === adminPass) {
            alert("تم التحقق بنجاح.. أهلاً بك يا أستاذ " + user);
            // هنا تفتح له صفحة المدرسين
            window.location.href = "teacher_dashboard.html";
        } else {
            alert("كلمة السر خاطئة! لا يمكنك الدخول كمدّرس.");
        }
    } else {
        // إذا كان طالب يدخل مباشرة
        alert("أهلاً بك يا بطل " + user + ". جاري تحميل دروسك.");
        window.location.href = "student_dashboard.html";
    }
}

// وظيفة تغيير الخلفية (نفسها ما تغيرت)
function changeBg() {
    const picker = document.getElementById('bgPicker');
    const selectedImg = picker.value;
    document.body.style.backgroundImage = "url('" + selectedImg + "')";
}