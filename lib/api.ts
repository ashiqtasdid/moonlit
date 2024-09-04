export const sendContactForm = async (email: string, message: string) => {
    const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
    });
    
    if (!response.ok) {
        throw new Error("Failed to send message");
    }
}