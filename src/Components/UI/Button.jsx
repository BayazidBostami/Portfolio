
const Button = ({ TagName, text, ...rest }) => {
    return (

        <TagName className='btn inline-block' {...rest}>{text}</TagName>


    );
};

export default Button;