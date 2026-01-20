export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get environment variables
    const apiUrl = process.env.NEXT_PUBLIC_CONSOLE_API_URL;
    const token = process.env.RELIANCE_COMPANY_TOKEN;

    if (!apiUrl || !token) {
      console.error("Missing environment variables");
      return Response.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Format data for console API
    // Combine firstName + lastName → name
    const fullName = `${firstName} ${lastName}`.trim();
    
    // Format as ARRAY (console API requirement)
    const enquiryData = [{
      name: fullName,                    // Combined name
      email: email.trim(),
      phone: "",                          // Required but can be empty
      source: "RC Console",               // Source field for RC Console
      location: "",                       // Required but can be empty
      comments: message.trim()            // message → comments
    }];

    // Build URL with token
    const url = new URL(apiUrl);
    url.searchParams.append("token", token);

    // Call console API
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiryData),
    });

    // Handle response
    const responseText = await response.text();
    
    if (!responseText || responseText.trim() === '') {
      if (response.status === 200) {
        return Response.json(
          { success: true, message: "Enquiry submitted successfully" },
          { status: 200 }
        );
      }
      return Response.json(
        { success: false, error: "Empty response from server" },
        { status: 500 }
      );
    }

    // Parse JSON response
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      if (response.status === 200) {
        return Response.json(
          { success: true, message: "Enquiry submitted successfully" },
          { status: 200 }
        );
      }
      return Response.json(
        { success: false, error: "Invalid response from server" },
        { status: 500 }
      );
    }

    // Check if console API returned success
    if (response.ok && responseData.status === 'success') {
      return Response.json(
        { success: true, message: "Enquiry submitted successfully" },
        { status: 200 }
      );
    } else {
      return Response.json(
        { 
          success: false, 
          error: responseData.message || "Failed to submit enquiry" 
        },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

