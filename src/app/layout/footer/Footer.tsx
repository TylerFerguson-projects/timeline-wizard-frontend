// layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Divider,
  Stack
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <Box className="bg-gray-100 pt-8 pb-6 mt-auto">
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" className="font-bold mb-4">
              Company Name
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-4">
              We provide innovative solutions to help businesses grow and thrive in the digital age.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="facebook" size="small" className="text-blue-600">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" size="small" className="text-blue-400">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" size="small" className="text-pink-600">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" size="small" className="text-blue-800">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid size={{xs:6, md:2}}>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-blue-600">
                Our Team
              </Link>
              <Link href="/careers" className="text-gray-600 hover:text-blue-600">
                Careers
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </Stack>
          </Grid>
          
          <Grid size={{xs:6, md:2}}>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/docs" className="text-gray-600 hover:text-blue-600">
                Documentation
              </Link>
              <Link href="/guides" className="text-gray-600 hover:text-blue-600">
                Guides
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-blue-600">
                Help Center
              </Link>
            </Stack>
          </Grid>
          
          <Grid size={{xs:6, md:2}}>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-blue-600">
                Cookie Policy
              </Link>
            </Stack>
          </Grid>
          
          <Grid size={{xs:6, md:2}}>
            <Typography variant="subtitle1" className="font-bold mb-4">
              Support
            </Typography>
            <Stack spacing={1}>
              <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                FAQ
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-blue-600">
                Support
              </Link>
              <Link href="/report" className="text-gray-600 hover:text-blue-600">
                Report an Issue
              </Link>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider className="my-6" />
        
        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-600 mb-2 md:mb-0">
            © {year} Company Name. All rights reserved.
          </Typography>
          
          <Box className="flex gap-4">
            <Link href="/privacy" className="text-gray-600 text-sm hover:text-blue-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 text-sm hover:text-blue-600">
              Terms
            </Link>
            <Link href="/sitemap" className="text-gray-600 text-sm hover:text-blue-600">
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;