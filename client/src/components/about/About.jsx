
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    // text-align: center;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">THE BLOG</Typography>
                <Text variant="h5">
                    Welcome to THE BLOG, where we're passionate about sharing knowledge, insights, and stories that inspire and inform our readers.

                    Our journey began with a simple idea: to create a platform where voices from diverse backgrounds can come together to express ideas, share experiences, and connect with a global audience.

                    At THE BLOG, we believe in the power of words to spark conversations, ignite creativity, and drive positive change. Whether you're a seasoned writer, a passionate storyteller, or someone looking to explore new perspectives, you'll find a home here.

                    Our team is comprised of dedicated writers, editors, and creatives who work tirelessly to bring you engaging content on topics ranging from technology and lifestyle to business and culture. We strive for authenticity, accuracy, and relevance in everything we publish, ensuring that each piece resonates with our readers.

                    Join us on this journey of discovery, learning, and growth. Together, let's explore the vast world of ideas and make meaningful connections along the way.

                    Thank you for being a part of the THE BLOG community!
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;