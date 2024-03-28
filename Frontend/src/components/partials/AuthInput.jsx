import { Button, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Eye, EyeOff, User } from "lucide-react";
import { useState } from "react";

export const AuthInput = ({ options }) => {
  const { label, icon, type, placeholder } = options;
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div>
      <FormLabel color={"white"}>{label}:</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>{icon}</InputLeftElement>
        <Input
          style={{
            color: "white",
            border: "1px solid #7B7f93"

           }}
          type={type === "password" ? (show ? "text" : "password") : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <InputRightElement  width='4.5rem'>
            <Button bg={"transparent"} _hover={{ background: "transparent" }} size='sm' onClick={handleClick}>
              {show ? <EyeOff color="white" /> : <Eye  color="white" />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </div>
  );
};