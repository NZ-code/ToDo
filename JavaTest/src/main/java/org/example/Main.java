package org.example;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class Main {
    public static void main(String[] args) {
        String message = "h7f4xFB6coLDUwQkOjNC+EQ7TnSTZ04KgQ93rCXmZe36xViJnS+AiLhrX4NWF01fstSoT5KDqdBE3GsUx5Ogn8ggqow+wgyQ6PdkSE1yZDBjDoeFrPL7VqlendoQvujVQDzqYloluEXyhr407xBAkVEWey1J0sMfNXlfp8l1qjjw+J1+GN1CJJAUNpcV/vpe+j7aTpDmlFmC0w5F3muJ26zop6jPHpM9s/NU3EwVmC9dGL1WoOOeNqXEKKO70/2vmuCxFJyUQi7cuVZ+li+Ms8ve8TMkXc38Er4sHFvI9FJzGqVPxkzJU4vG0P7QM67ykOMxtAVqIAjFOcRkPW9UNsL2+6Sw30pcyclUq+K8ovO5O00mx2rm2gjrWZyMHVjqe1BQjUeoFSoZAEVGXxvAeld7uFT6OVf18+ssyPZ1y+ZYas+IQNX0zUQbMfsKgkNDzAIV9cn6psnwvJvCnMevDGmMBr6MYkZPmb4SFlzr33IqVvS6hBDzhlLCj9lOmFwvHj43A8uM4W6f0e3q6C1/+Z1pflfEC9/lNkQ6FyqojimkoO+3j0YeeLgAkVe2xJ1qsW4u6D0BrjsgoRiQstgRTowB1YeEZ5ROFw3/waSGkUg+MiggQZMnExtzhgKVgMCUrkCduPCXK1T2RrDq88ddN1jykRSBk0/uYOQ3zNoGiAA=";
        byte[] decryptedMessageBytes;
        try {
            System.out.println("String length" + message.length());
            byte messageBytes [] = Base64.getDecoder().decode(message.getBytes("UTF-8"));
            System.out.println("Bytes length: " + messageBytes.length);




            decryptedMessageBytes = decryptCipher.doFinal(messageBytes);

        } catch (IllegalBlockSizeException e) {
            throw new RuntimeException(e);
        } catch (BadPaddingException e) {
            throw new RuntimeException(e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        String decryptedMessage = new String(decryptedMessageBytes, StandardCharsets.UTF_8);

    }
}