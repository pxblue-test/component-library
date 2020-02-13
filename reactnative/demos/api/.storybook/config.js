import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ReactThemes } from '@pxblue/themes';
import * as Colors from '@pxblue/colors';
import 'typeface-open-sans';
import './styles.css';
import pxblue from './pxblue-theme';

addParameters({
    options: {
        theme: pxblue,
    }
});

addDecorator((storyFn) => (
    <MuiThemeProvider theme={createMuiTheme(ReactThemes.blue)}>
        <div className={'wrapper'} style={{ color: Colors.gray['800'] }}>
            {storyFn()}
        </div>
    </MuiThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|tsx)$/), module);
