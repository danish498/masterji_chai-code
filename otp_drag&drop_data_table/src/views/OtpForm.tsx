import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const OtpForm = () => {
  const length = 4;
  const validOtp = "1234";

  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));
  const [isOtpVerified, setIsOtpVerified] = useState<null | boolean>(null);

  const handleTextChange = (input: string, index: number) => {
    setIsOtpVerified(null)
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const finalOtp = OTP.join("");
    if (finalOtp !== validOtp) {
      setIsOtpVerified(false);
    } else {
      setIsOtpVerified(true);
    }
  };

  const handleResend = () => {
    setOTP(Array(length).fill(""));
    setIsOtpVerified(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^\d$/.test(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-background-otp h-screen">
      <div className="flex items-center justify-center flex-col h-screen">
        <p className="font-bold text-5xl mb-10 text-white">Chai aur Code</p>
        <div className="bg-white flex flex-col items-center p-8 px-14 rounded-lg">
          <p className="text-xl font-bold p-2">Mobile Phone Verification</p>
          <p className="text-xs text-slate-400 mb-4 text-center">
            Enter the 4-digit verification code that was sent to <br /> your
            phone number.
          </p>
          <div className="flex gap-2 flex-col mb-5">
            <div className="flex gap-2">
              {Array.from({ length }, (_, index) => (
                <Input
                  className={`w-12 h-12 ${
                    isOtpVerified === null
                      ? "border border-gray-300"
                      : isOtpVerified
                      ? "border border-green-500"
                      : "border border-red-600"
                  }`}
                  key={index}
                  type="text"
                  maxLength={1}
                  value={OTP[index]}
                  onChange={(e) => handleTextChange(e.target.value, index)}
                  ref={(ref) =>
                    (inputRef.current[index] = ref as HTMLInputElement)
                  }
                  onKeyDown={handleKeyDown}
                  style={{ marginRight: index === length - 1 ? "0" : "10px" }}
                />
              ))}
            </div>
            <Button
              className={`h-9 ${
                isOtpVerified === null
                  ? "bg-primary-otp hover:bg-secondary-otp"
                  : isOtpVerified
                  ? "bg-green-500 hover:bg-green-300"
                  : "bg-red-600 hover:bg-red-400"
              } `}
              onClick={handleVerifyOtp}
            >
              Verify Account
            </Button>
          </div>
          <p className="text-xs text-slate-400">
            Didn’t receive code?
            <span
              className="text-[#112D4E] underline cursor-pointer"
              onClick={handleResend}
            >
              {" "}
              Resend{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
