import React from 'react';
import { Box, Title, Text, List, Group, ActionIcon } from '@mantine/core';
import { BrandGithub, BrandLinkedin, MapPin, Mail } from 'tabler-icons-react';
import Typewriter from 'typewriter-effect';
import { LINKEDIN_URL, GITHUB_URL } from '../data/socialmedia';

function LeftSection({ activeSection }) {
  const sections = ['about', 'experience', 'education', 'projects', 'skills', 'blogs'];
  const highlightStyle = { color: '#248277', fontWeight:'bold' };

  const handleSectionClick = (section) => {
    if (section === 'about') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -40; // Adjust this value to set the amount of space from the top
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box>
      <Group mb="lg">
        <ActionIcon 
          component="a" 
          href={GITHUB_URL}
          target="_blank" 
          rel="noopener noreferrer"
          title="GitHub"
          variant="transparent"
          size="lg"
          className="icon-hover"
        >
          <BrandGithub size={30} />
        </ActionIcon>
        <ActionIcon 
          component="a" 
          href={LINKEDIN_URL}
          target="_blank" 
          rel="noopener noreferrer"
          title="LinkedIn"
          variant="transparent"
          size="lg"
          className="icon-hover"
        >
          <BrandLinkedin size={30} />
        </ActionIcon>
      </Group>
      <Title order={1} style={{ fontFamily: 'Space Mono' }}>Dylan McCaw</Title>
      <Text size="xl" mb="xl" style={{ paddingTop:'15px'}}>
        <Typewriter
          options={{
            strings: ['Software Engineer'],
            autoStart: true,
            loop: true,
            pauseFor: 5000,
          }}
        />
      </Text>
      <div style={{paddingBottom:'40px'}}>
      <Text>
        <Mail style={highlightStyle} size={15} /> me@dylan.software
      </Text>
      <Text>
        <MapPin style={highlightStyle} size={15} /> Falkirk, Scotland, United Kingdom
      </Text>
      </div>
      {/* List of Sections */}
      <List spacing="sm" size="sm" center withPadding>
        {sections.map((section) => (
          <List.Item
            key={section}
            icon="—"
            onClick={() => handleSectionClick(section)}
            style={{
              color: activeSection === section ? '#248277' : 'inherit',
              fontWeight: activeSection === section ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </List.Item>
        ))}
      </List>
    </Box>
  );
}

export default LeftSection;