export default (req, res) => {
    res.status(200).json(
        {
            "requestUUID": "915c7b17-0f27-4047-8bb0-746732dcb968",
            "book": {
                "title": "Building React Apps with Server-Side Rendering",
                "rating": "3.9",
                "publisher": "Apress (New York)",
                "IBSN": "978-1-484-25869-9",
                "author": "Mohit Thakkar"
            }
        }
    )
  }