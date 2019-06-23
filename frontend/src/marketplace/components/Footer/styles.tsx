export const styles = (theme: any) => ({
         root: {
           display: 'flex',
           flexDirection: 'column',
           height: '5vh',
           marginBottom: 0,
           backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50%, #fff 5%, #eef8ff)'
         },
         main: {
           marginTop: theme.spacing.unit * 2,
           marginBottom: theme.spacing.unit * 4,
           backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50%, #fff 5%, #eef8ff)'
         },
         footer: {
           marginTop: '1.5vh',
           backgroundColor: 'white',
           backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50%, #fff 5%, #eef8ff)'
         }
       });

export default styles;
