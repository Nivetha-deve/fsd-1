const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/teachers`;

const getAllTeachers = async () => {
    const response = await fetch(backendUrl);
    return await response.json();
};

export { getAllTeachers };