import { Box } from "@mui/material"


const Payment = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, gap: 200}}>
      <Box sx={{ backgroundColor: "grey", width: 150, height: 400 }}>
        <h1>14days Trial</h1>
      </Box>
      <Box sx={{ backgroundColor: "grey", width: 150, height: 400 }}>
        <h1>Member</h1>
      </Box>
    </div>
  )
}

export default Payment