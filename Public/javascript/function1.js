
    function generateOTP(event) {
        const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
        const otpMessage = document.getElementById("otpMessage");

        otpMessage.innerText = `Your OTP is ${otp}`;
        otpMessage.style.opacity = "1"; 
        setTimeout(() => {
            otpMessage.style.opacity = "0";
        }, 5000);
    }
    function function3()
    {
       window.location.href="/pay/home";
       console.log("hello")
    }