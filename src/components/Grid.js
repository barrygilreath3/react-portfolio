import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/style.css';
import '../styles/grid.css';
import ECommerce from '../photos/ecommerce.jpg';
import CBB from '../photos/community.jpg';
import PetPlace from '../photos/futurepetplace.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

export default function BasicGrid() {
  return (
    <div>
      <h1 id="portfolio" class="sectiontitle">Portfolio</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <div>
                  <h1>
                      Community Bulletin Board
                  </h1>

                  <h3>
                      NPM Package
                  </h3>

                  <img src={CBB}/>

                  <p>
                      A simple, easy-to-use community bulletin board for sharing community news and events
                  </p>

                  <div class="links">
                      <p>
                          <a href="https://www.npmjs.com/package/community-bulletin-board">NPM Package</a>
                      </p>
                      <p>
                          <a href="https://github.com/barrygilreath3/community-bulletin-board">GitHub</a>
                      </p>
                  </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
                <div>
                    <h1>
                        E-Commerce Backend
                    </h1>

                    <img src={ECommerce}/>

                    <h3>
                        JavaScript | Express | Sequelize | Handlebars
                    </h3>

                    <p>
                      The back-end of an Etsy or Shopify-type web application
                    </p>

                    <div class="links">
                        <p>
                            <a href="https://github.com/barrygilreath3/e-commerce-backend">GitHub</a>
                        </p>
                    </div>
                </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div>
                    <h1>
                        Future Pet Place
                    </h1>

                    <img src={PetPlace}/>

                    <h3>
                        JavaScript | Express | Sequelize | Handlebars
                    </h3>

                    <p>
                      A pet-finder application, powered by PetFinder API
                    </p>

                    <div class="links">
                        <p>
                            <a href="https://lilwill13.github.io/Future-Pet-Place/">Application</a>
                        </p>
                        <p>
                            <a href="https://github.com/LILWill13/Future-Pet-Place">GitHub</a>
                        </p>
                    </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
