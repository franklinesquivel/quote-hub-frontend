import { Alert, Button }          from 'antd';
import { useGetRandomQuoteQuery } from '@/api';


export const HomePage = () => {
    const { data, refetch, isFetching, isError } = useGetRandomQuoteQuery();

    if (isFetching)
        return <p>loading...</p>;

    if (isError)
        return <Alert showIcon message='Error' type='error' />;

    return (
        <>
            { data && (
                <Alert
                    message={ `[${ data.category }] ${ data.author }` }
                    type='info'
                    description={
                        <blockquote>{ data.quote }</blockquote>
                    }
                />
            ) }

            <Button onClick={ () => void refetch() }>Fetch other quote</Button>
        </>
    );
};