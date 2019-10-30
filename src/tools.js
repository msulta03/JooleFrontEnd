// a quick function drawer to help streamline some things

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

//FIXME: debugging purposes
 export const  tryThis = () => {
        return console.log('clicked!');
        
    }