import { LoginOutlined }   from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState }        from 'react';
import { LoginForm }       from '@/components';


export const ClickPopup = () => {

    const [open, setOpen] = useState(false);


    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <Popover
            content={ <LoginForm /> }
            open={ open }
            title='Title'
            trigger='click'
            onOpenChange={ handleOpenChange }
        >
            <Button
                shape='round'
                size='large'
            >
                Log In
                <LoginOutlined />
            </Button>
        </Popover>
    );
};
