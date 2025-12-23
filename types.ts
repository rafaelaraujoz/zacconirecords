
import React from 'react';

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
}