const getRequest = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/list');
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
};

getRequest()

const postRequest = async () => {
    const newTodo = { 
        userId: 1,  
        title: 'Wash my hands',
        completed: false
    }

    try {
        const resp = await axios.post('http://127.0.0.1:5000/list', newTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

postRequest()

const putRequest = async () => {
    // Update TODO object with ID 1
    const updatedTodo = {
        id: 1,
        userId: 1,
        title: 'Updated task title',
        completed: true
    }

    try {
        const resp = await axios.put(' http://127.0.0.1:5000/update', updatedTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

putRequest()


const deleteRequest = async () => {
    try {
        const resp = await axios.delete(' http://127.0.0.1:5000/delete')
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

deleteRequest()