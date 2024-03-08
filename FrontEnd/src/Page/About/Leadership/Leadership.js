import React, { useState } from 'react';
import './leadership.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Leadership = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id='leadership'>
            <h2>Goals to Achieve for the leadership</h2>
            <p>Who are in extremely love with eco-friendly system.</p>
            <div className="container">
                <div className="row m-0">
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={handleChange('panel1')}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }}>Success</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }}>Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Donec placerat, lectus sed mattis semper, neque lectus feugiat
                                        lectus, varius pulvinar diam eros in elit. Pellentesque convallis
                                        laoreet laoreet.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={handleChange('panel3')}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }}>Success Info</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                                        sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === 'panel4'}
                                onChange={handleChange('panel4')}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ flexShrink: 0 }}>
                                        Our Family
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                                        sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ioblgpA5eTo?si=huWLT4rA4Sn-SDjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leadership;
