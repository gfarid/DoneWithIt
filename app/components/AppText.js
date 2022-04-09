import React from 'react';
import { Text} from 'react-native';
import defaultStyels from '../config/styles';

function AppText({children , style, ...otherProps}) {
    return (
        <Text style={[defaultStyels.text , style]} {...otherProps}>{children}</Text>
    );
}

export default AppText;
