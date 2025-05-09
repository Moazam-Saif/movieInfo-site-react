import { Form } from "react-router";

 export const getContacts=async({request})=>{
    try {
        const response=await request.formData();
        const data=Object.fromEntries(response);
        console.log(data);
        return null;
    } catch (error) {
        console.log(error);
    }
 }

 export const Contacts=()=>{
    return(
        <>
        <Form action="/contact" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"></input>

            <button type="submit">Submit</button>

        </Form>
        </>
    )
 }