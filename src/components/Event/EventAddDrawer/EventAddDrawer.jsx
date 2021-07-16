import React from "react";
import { useMutation } from "react-query";
import { addEvent } from "../../../api/event/event.request";
import FormDrawer from "../../Common/FormDrawer/FormDrawer";
import { Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

function EventAddDrawer({ closeModal, refetchData }) {
  const { handleSubmit, register } = useForm();
  const [onSubmit, { status }] = useMutation(addEvent, {
    onError() {},
    onSuccess() {
      closeModal();
      refetchData();
    },
  });

  return (
    <>
      <FormDrawer
        title={"Add new event"}
        isLoading={status === "loading"}
        width={350}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"name"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"name"}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"description"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"description"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"headerImage"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"headerImage"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"photos"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"photos"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"venue"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"venue"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"fromDate"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"fromDate"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"toDate"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"toDate"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"status"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"status"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"speakers"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"speakers"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"createdBy"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"createdBy"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <TextField
                  label={"host"}
                  variant={"outlined"}
                  size={"small"}
                  fullWidth
                  name={"host"}
                  rows={3}
                  ref={register}
                />
              </div>
            </Grid>
          </Grid>

          <div>
            <button className="btn btn-primary" type={"submit"}>
              Save
            </button>
            <button onClick={closeModal} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </FormDrawer>
    </>
  );
}

export default EventAddDrawer;
