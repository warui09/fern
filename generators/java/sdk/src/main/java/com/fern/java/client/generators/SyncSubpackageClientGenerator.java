package com.fern.java.client.generators;

import com.fern.ir.model.commons.ErrorId;
import com.fern.ir.model.commons.TypeId;
import com.fern.ir.model.ir.Subpackage;
import com.fern.java.AbstractGeneratorContext;
import com.fern.java.client.ClientGeneratorContext;
import com.fern.java.client.GeneratedClientOptions;
import com.fern.java.client.GeneratedEnvironmentsClass;
import com.fern.java.output.GeneratedJavaFile;
import com.fern.java.output.GeneratedJavaInterface;
import com.fern.java.output.GeneratedObjectMapper;
import com.squareup.javapoet.ClassName;
import java.util.Map;

public class SyncSubpackageClientGenerator extends AbstractSubpackageClientGenerator {

    public SyncSubpackageClientGenerator(
            Subpackage subpackage,
            AbstractGeneratorContext<?, ?> generatorContext,
            GeneratedObjectMapper generatedObjectMapper,
            ClientGeneratorContext clientGeneratorContext,
            GeneratedClientOptions generatedClientOptions,
            GeneratedJavaFile generatedSuppliersFile,
            GeneratedEnvironmentsClass generatedEnvironmentsClass,
            GeneratedJavaFile requestOptionsFile,
            Map<TypeId, GeneratedJavaInterface> allGeneratedInterfaces,
            Map<ErrorId, GeneratedJavaFile> generatedErrors) {
        super(
                subpackage,
                generatorContext,
                generatedObjectMapper,
                clientGeneratorContext,
                generatedClientOptions,
                generatedSuppliersFile,
                generatedEnvironmentsClass,
                requestOptionsFile,
                allGeneratedInterfaces,
                generatedErrors);
    }

    @Override
    protected AbstractClientGeneratorUtils clientGeneratorUtils() {
        return new SyncClientGeneratorUtils(
                className,
                clientGeneratorContext,
                generatedClientOptions,
                generatedObjectMapper,
                generatedEnvironmentsClass,
                allGeneratedInterfaces,
                generatedSuppliersFile,
                requestOptionsFile,
                subpackage,
                generatedErrors);
    }

    @Override
    protected ClassName rawClientImplName(ClassName implClientName) {
        return ClassName.get(implClientName.packageName(), "Raw" + implClientName.simpleName());
    }
}
