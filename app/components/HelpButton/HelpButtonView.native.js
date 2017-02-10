import React from 'react';
import { Alert } from 'react-native';
import Button from 'react-native-button';

import styles from '../../native/styles';

export default props => 
    <Button 
        onPress={props.onClick} 
        style={styles.helpButtonText} 
        containerStyle={styles.helpButton}>
        Help
    </Button>;