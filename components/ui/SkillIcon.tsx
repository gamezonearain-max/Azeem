import {
  BarChart3,
  Code2,
  Film,
  Layers,
  Palette,
  Sparkles,
  Youtube,
  type LucideProps,
} from 'lucide-react';
import type { SkillIconName } from '@/types/portfolio';

interface SkillIconProps extends LucideProps {
  name: SkillIconName;
}

export function SkillIcon({ name, ...props }: SkillIconProps) {
  switch (name) {
    case 'code':
      return <Code2 {...props} />;
    case 'palette':
      return <Palette {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'film':
      return <Film {...props} />;
    case 'youtube':
      return <Youtube {...props} />;
    case 'bar-chart':
      return <BarChart3 {...props} />;
  }
}
