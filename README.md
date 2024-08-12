# Countries Explorer

Countries Explorer is a React application that allows users to explore information about different countries, including population, region, and capital. The app features search functionality, region-based filtering, pagination, and a special response when searching for "Israel".

## Features

- **Search by Country Name:** Users can search for countries by typing the country name.
- **Region-Based Filtering:** Users can filter countries based on their region (e.g., Africa, Europe).
- **Pagination:** Countries are displayed in pages, with a limited number of countries per page.
- **Dark Mode Support:** The app supports both light and dark themes.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/countries-explorer.git
    cd countries-explorer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.

## Usage

1. **Search for Countries:** Use the search bar to search for countries by name.
2. **Filter by Region:** Use the region dropdown to filter countries by region.
3. **Pagination:** Navigate through pages using the Next and Previous buttons.
4. **Dark Mode:** The theme will adjust based on your system's theme settings.

## Deployment

### Deploying to GitHub Pages

1. Install the `gh-pages` package:

    ```bash
    npm install --save gh-pages
    ```

2. Add the following scripts to your `package.json`:

    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

3. Deploy the app to GitHub Pages:

    ```bash
    npm run deploy
    ```

    Your app will be deployed at `https://your-username.github.io/countries-explorer`.

### Custom Domain

If you want to use a custom domain, create a `CNAME` file in the `public` folder with your domain name.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** Library for routing in React applications.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **gh-pages:** Package for deploying to GitHub Pages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Data provided by [REST Countries API](https://restcountries.com/).
- Icons provided by [react-icons](https://react-icons.github.io/react-icons/).

