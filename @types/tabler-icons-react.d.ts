declare module 'tabler-icons-react/dist/icons/*' {
    interface IconProps extends SVGAttributes<SVGElement> {
        color?: string;
        size?: string | number;
      }
      
    type Icon = FC<IconProps>
    const icon: Icon
    export default icon
}
