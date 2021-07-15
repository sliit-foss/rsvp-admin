import React, { useState } from "react";
import { refetchProducts, useGetProducts } from "../queries/useGetProducts";
import {
  Container,
  Card,
  LinearProgress,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ProductTable from "../components/Product/ProductTable/ProductTable";
import SearchIcon from "@material-ui/icons/Search";
import { TableSearchInput } from "../components/Common/TableViewComponents/TableSearchInput";
import AddIcon from "@material-ui/icons/Add";
import ProductAddDrawer from "../components/Product/ProductAddDrawer/ProductAddDrawer";

const ProductPage = () => {
  const [searchText, setSearchText] = useState("");
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const modalClose = () => {
    toggleDrawer(false);
  };

  const { data = [], status } = useGetProducts();

  const noData = status === "success" && data?.length === 0;
  const hasData = status === "success" && data?.length !== 0;

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <h4>Manage Products</h4>

          <Grid container spacing={2} className={"mb-3 mt-3"}>
            <Grid item xs={1} />
            <Grid item xs={9}>
              <SearchIcon className="search-icon" />{" "}
              <TableSearchInput onUpdate={setSearchText} />
            </Grid>
            <Grid item xs={2}>
              <button
                className="btn btn-primary"
                onClick={() => toggleDrawer(true)}
              >
                <AddIcon /> New Product
              </button>
            </Grid>
          </Grid>

          {status === "loading" && <LinearProgress />}

          <Container className="top-container">
            <Card>
              <Toolbar style={{ paddingLeft: 0 }}>
                <div className="container">
                  {status === "error" && (
                    <Alert severity="error">Error loading Product Data</Alert>
                  )}
                  {noData && (
                    <Alert severity="info">You have no saved products.</Alert>
                  )}
                  {hasData && (
                    <ProductTable products={data} searchVal={searchText} />
                  )}
                </div>
              </Toolbar>
            </Card>
          </Container>
        </div>
      </div>

      {isDrawerOpen && (
        <ProductAddDrawer
          closeModal={modalClose}
          refetchData={async () => {
            await refetchProducts();
          }}
        />
      )}
    </>
  );
};

export default ProductPage;
