{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(result:ResourceLoadState): void {
    if (result.state === "loading") {
      console.log(`👀 ${result.state}...`)
    } else if (result.state === "success") {
      console.log(`😃 ${result.response.body}`)
    } else if (result.state === "fail") {
      console.log(`😱 ${result.reason}`)
    } else {
      throw new Error('please invoke with correct state')
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
