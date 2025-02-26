// layout/Footer.tsx
import React from 'react';
import NextLink from 'next/link';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Stack,
  Paper,
  Link as MuiLink
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <Paper elevation={0} sx={{ width: '100%',backgroundColor: 'background.paper', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container maxWidth="lg" sx={{py:6,display: 'flex', justifyContent: 'center', alignItems: 'center'}}  >
        <Grid container spacing={4} >
          <Grid sx={{xs:12, md:4}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Tyler Ferguson
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.600', mb: 2 }}>
              Full Stack Cloud Developer
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="facebook" size="small" sx={{ color: 'blue.600' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" size="small" sx={{ color: 'blue.400' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" size="small" sx={{ color: 'pink.600' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" size="small" sx={{ color: 'blue.800' }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={NextLink} href="/about" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                About Us
              </MuiLink>
              <MuiLink component={NextLink} href="/team" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Our Team
              </MuiLink>
              <MuiLink component={NextLink} href="/careers" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Careers
              </MuiLink>
              <MuiLink component={NextLink} href="/contact" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Contact
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={NextLink} href="/blog" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Blog
              </MuiLink>
              <MuiLink component={NextLink} href="/docs" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Documentation
              </MuiLink>
              <MuiLink component={NextLink} href="/guides" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Guides
              </MuiLink>
              <MuiLink component={NextLink} href="/help" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Help Center
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={NextLink} href="/privacy" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Privacy Policy
              </MuiLink>
              <MuiLink component={NextLink} href="/terms" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Terms of Service
              </MuiLink>
              <MuiLink component={NextLink} href="/cookies" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Cookie Policy
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Support
            </Typography>
            <Stack spacing={1}>
              <MuiLink component={NextLink} href="/faq" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                FAQ
              </MuiLink>
              <MuiLink component={NextLink} href="/support" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Support
              </MuiLink>
              <MuiLink component={NextLink} href="/report" sx={{ color: 'grey.600', textDecoration: 'none', '&:hover': { color: 'blue.600' } }}>
                Report an Issue
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider  />
        
     
      </Container>
    </Paper>
  );
};

export default Footer;
