/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2;

import com.seed.trace.core.ClientOptions;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.core.RequestOptions;
import com.seed.trace.core.SeedTraceApiException;
import com.seed.trace.core.SeedTraceException;
import com.seed.trace.core.Suppliers;
import com.seed.trace.resources.v2.problem.AsyncProblemClient;
import com.seed.trace.resources.v2.v3.AsyncV3Client;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;

public class AsyncV2Client {
    protected final ClientOptions clientOptions;

    protected final Supplier<AsyncProblemClient> problemClient;

    protected final Supplier<AsyncV3Client> v3Client;

    public AsyncV2Client(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.problemClient = Suppliers.memoize(() -> new AsyncProblemClient(clientOptions));
        this.v3Client = Suppliers.memoize(() -> new AsyncV3Client(clientOptions));
    }

    public CompletableFuture<Void> test() {
        return test(null);
    }

    public CompletableFuture<Void> test(RequestOptions requestOptions) {
        HttpUrl httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .build();
        Request okhttpRequest = new Request.Builder()
                .url(httpUrl)
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        CompletableFuture<Void> future = new CompletableFuture<>();
        client.newCall(okhttpRequest).enqueue(new Callback() {
            @Override
            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                try (ResponseBody responseBody = response.body()) {
                    if (response.isSuccessful()) {
                        future.complete(null);
                        return;
                    }
                    String responseBodyString = responseBody != null ? responseBody.string() : "{}";
                    future.completeExceptionally(new SeedTraceApiException(
                            "Error with status code " + response.code(),
                            response.code(),
                            ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class)));
                    return;
                } catch (IOException e) {
                    future.completeExceptionally(new SeedTraceException("Network error executing HTTP request", e));
                }
            }

            @Override
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                future.completeExceptionally(new SeedTraceException("Network error executing HTTP request", e));
            }
        });
        return future;
    }

    public AsyncProblemClient problem() {
        return this.problemClient.get();
    }

    public AsyncV3Client v3() {
        return this.v3Client.get();
    }
}
