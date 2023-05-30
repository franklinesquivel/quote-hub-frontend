import { ThemeConfig } from 'antd';


const primaryColor = '#5552FF';

export const mainTheme: ThemeConfig = {
    token:      {
        borderRadius: 8,
        colorError:   '#FF5C5C',
        colorInfo:    primaryColor,
        colorPrimary: primaryColor,
        colorSuccess: '#39D98A',
        colorWarning: '#FDAC42'
    },
    components: {
        Result: {
            colorTextHeading: primaryColor
        }
    }
};