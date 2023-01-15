import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'

const Feed = () => {
  return (
  <Box flex={4} p={2}>
    <Post
      avatar="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400"
      title="Travis Howard"
      subheader="Mostaccioli al Dente"
      image="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg=" 
      content="Mostaccioli is a hearty baked pasta that's perfect for a weeknight dinner. Essentially an easier lasagna made with penne. Top it with plenty of cheese and you'll soon have a new favorite to add to the routine. "
    />
    <Post
      avatar="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
      title="Agnes Walker"
      subheader="Pan Seared Salmon"
      image="https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g=" 
      content="It's advised to have seafood dishes twice a week and luckily, salmon is one of those ingredients that I never get tired of."
    />
    <Post
      avatar="https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
      title="Remy Sharp"
      subheader="Tomato Soup"
      image="https://media.istockphoto.com/id/1177031727/photo/pumpkin-and-carrot-soup-with-cream-on-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=HmxXL082ccHLy1KAKJxyD-bMcvzTV-OrpoBhtUhV500=" 
      content="This quick and easy homemade tomato soup recipe is the best and completely made from scratch with fresh ripened tomatoes, leafy green basil, garlic and onion, vegetable stock, and more healthy ingredients. "
    />
  </Box>
  )
}

export default Feed