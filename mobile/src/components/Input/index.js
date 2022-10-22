import { Input as NativeBaseInput, FormControl } from "native-base";

import { THEME } from "../../theme";

export default function Input({ errorMessage = null, isInvalid, ...rest }) {
    const invalid = !!errorMessage || isInvalid ? true : false;

    return (
        <FormControl isInvalid={invalid}>
            <NativeBaseInput
                bgColor="gray.50"
                h={12}
                placeholderTextColor={THEME.COLORS.TEXT.GRAY}
                isInvalid={invalid}
                fontSize={THEME.FONT_SIZE.SM}
                fontFamily={THEME.FONT_FAMILY.POPPINS_500MEDIUM}
                borderColor={THEME.COLORS.BORDER.BLACK}
                mb={0}
                _invalid={{
                    borderColor: THEME.COLORS.BORDER.RED,
                }}
                {...rest}
            />
            <FormControl.ErrorMessage style={{ bottom: 8 }}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}