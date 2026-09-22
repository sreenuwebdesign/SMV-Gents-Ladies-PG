import React from 'react';
import {
  Wifi,
  Sparkles,
  ArrowUpDown,
  Droplets,
  GlassWater,
  UtensilsCrossed,
  Utensils,
  Salad,
  BadgePercent,
  User,
  Users,
  Bath,
  Archive,
  Bed,
  Flame,
  Coffee,
  CookingPot,
  Soup,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Info,
  CalendarCheck,
  Check,
  Layers,
  ArrowRight,
  Home,
  Snowflake
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size }) => {
  const iconProps = { className, size };

  switch (name) {
    case 'Wifi':
      return <Wifi {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'ArrowUpDown':
      return <ArrowUpDown {...iconProps} />;
    case 'Refrigerator':
      return <Snowflake {...iconProps} />;
    case 'GlassWater':
      return <GlassWater {...iconProps} />;
    case 'Droplets':
      return <Droplets {...iconProps} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed {...iconProps} />;
    case 'Salad':
      return <Salad {...iconProps} />;
    case 'BadgePercent':
      return <BadgePercent {...iconProps} />;
    case 'User':
      return <User {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Bath':
      return <Bath {...iconProps} />;
    case 'Archive':
      return <Archive {...iconProps} />;
    case 'Bed':
      return <Bed {...iconProps} />;
    case 'Flame':
      return <Flame {...iconProps} />;
    case 'Utensils':
      return <Utensils {...iconProps} />;
    case 'Coffee':
      return <Coffee {...iconProps} />;
    case 'CookingPot':
      return <CookingPot {...iconProps} />;
    case 'Soup':
      return <Soup {...iconProps} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...iconProps} />;
    case 'Phone':
      return <Phone {...iconProps} />;
    case 'MessageCircle':
      return <MessageCircle {...iconProps} />;
    case 'MapPin':
      return <MapPin {...iconProps} />;
    case 'Clock':
      return <Clock {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Building2':
      return <Building2 {...iconProps} />;
    case 'ChevronRight':
      return <ChevronRight {...iconProps} />;
    case 'Menu':
      return <Menu {...iconProps} />;
    case 'X':
      return <X {...iconProps} />;
    case 'ExternalLink':
      return <ExternalLink {...iconProps} />;
    case 'Info':
      return <Info {...iconProps} />;
    case 'CalendarCheck':
      return <CalendarCheck {...iconProps} />;
    case 'Check':
      return <Check {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'ArrowRight':
      return <ArrowRight {...iconProps} />;
    case 'Home':
      return <Home {...iconProps} />;
    default:
      return <CheckCircle2 {...iconProps} />;
  }
};
